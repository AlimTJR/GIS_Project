function fungsiwarna() {
    var fillwarna = document.getElementById("fillwarna");
            if (feature.properties['JML_KSs'] >= 10.000000 && feature.properties['JML_KSs'] <= 14.333333 ) {
                return {
                fillColor: 'rgba(254,240,217,1.0)',
            }
            }
            if (feature.properties['JML_KSs'] >= 14.333333 && feature.properties['JML_KSs'] <= 18.666667 ) {
                return {
                fillColor: 'rgba(254,212,154,1.0)',
            }
            }
            if (feature.properties['JML_KSs'] >= 18.666667 && feature.properties['JML_KSs'] <= 23.000000 ) {
                return {
                fillColor: 'rgba(253,166,109,1.0)',
            }
            }
            if (feature.properties['JML_KSs'] >= 23.000000 && feature.properties['JML_KSs'] <= 27.333333 ) {
                return {
                fillColor: 'rgba(242,114,74,1.0)',
            }
            }
            if (feature.properties['JML_KSs'] >= 27.333333 && feature.properties['JML_KSs'] <= 31.666667 ) {
                return {
                fillColor: 'rgba(218,59,40,1.0)',
            }
            }
            if (feature.properties['JML_KSs'] >= 31.666667 && feature.properties['JML_KSs'] <= 36.000000 ) {
                return {
                fillColor: 'rgba(179,0,0,1.0)',
            }
            }
        }