var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var options = {
    position: 'topright',
    draw: {
        polyline: { shapeOptions: { color: '#FF0000' } }, // Red
        polygon: { shapeOptions: { color: '#0000FF' } }, // Blue
        rectangle: { shapeOptions: { color: '#00FF00' } }, // Green
        circle: { shapeOptions: { color: '#FFA500' } }, // Orange
        marker: { shapeOptions: { color: '#FFFF00'} }
    },
    edit: { featureGroup: editableLayers, remove: true }
};

var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
    var layer = e.layer;
    openTextModal("Sample text for the feature", function(inputText) {
        if (inputText !== "") {
            layer.bindPopup(convertNewlinesToBreaks(inputText));
        } else {
            layer.bindPopup("No description provided.");
        }
        editableLayers.addLayer(layer);
    });
});

editableLayers.on('layeradd', function(e) {
    var layer = e.layer;
    layer.on('dblclick', function(event) {
        openTextModal(layer.getPopup().getContent(), function(newText) {
            if (newText !== "") {
                layer.setPopupContent(newText);
            }
        });
    });
});

var currentFeatureIndex = 0;
var matchingFeatures = [];

function searchFeature() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    matchingFeatures = []; // Reset the list of matching features
    currentFeatureIndex = 0; // Reset index

    editableLayers.eachLayer(function(layer) {
        var popupContent = layer.getPopup() ? layer.getPopup().getContent() : '';
        if (popupContent.toLowerCase().includes(searchText)) {
            matchingFeatures.push(layer);
        }
    });

    if (matchingFeatures.length > 0) {
        showFeature(matchingFeatures[currentFeatureIndex]);
        updateNavigationButtons();
    } else {
        alert('No features found with the given text.');
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('prevButton').style.display = 'none';
    }
}

function nextFeature() {
    if (matchingFeatures.length > 0 && currentFeatureIndex < matchingFeatures.length - 1) {
        currentFeatureIndex++;
        showFeature(matchingFeatures[currentFeatureIndex]);
        updateNavigationButtons(); // Update button visibility based on new index
    }
}

function previousFeature() {
    if (matchingFeatures.length > 0 && currentFeatureIndex > 0) {
        currentFeatureIndex--;
        showFeature(matchingFeatures[currentFeatureIndex]);
        updateNavigationButtons(); // Update button visibility based on new index
    }
}

function updateNavigationButtons() {
    document.getElementById('nextButton').style.display = (currentFeatureIndex < matchingFeatures.length - 1) ? 'block' : 'none';
    document.getElementById('prevButton').style.display = (currentFeatureIndex > 0) ? 'block' : 'none';
}
function showFeature(layer) {
    if (layer.getLatLng) {
        // This is likely a marker
        map.setView(layer.getLatLng(), map.getZoom());
    } else if (layer.getBounds) {
        // This is likely a polyline or polygon
        map.fitBounds(layer.getBounds());
    } else {
        console.error("Unsupported layer type");
    }
    layer.openPopup();
}

function openTextModal(defaultText, callback) {
    document.getElementById('textInput').value = defaultText || '';
    window.saveText = () => {
        callback(document.getElementById('textInput').value);
        closeTextModal();
    };
    document.getElementById('textModal').style.display = 'block';
}

function closeTextModal() {
    document.getElementById('textModal').style.display = 'none';
}

function convertNewlinesToBreaks(text) {
    return text.replace(/\n/g, '<br>');
}
