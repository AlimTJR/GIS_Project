$(function () {
    var totalRevenue = 15341110;
    
    //Jumlah Kasus per Kecamatan
    var productsRevenuePieChart = new CanvasJS.Chart("products-revenue-pie-chart", {
        animationEnabled: true,
        theme: "theme3",
        legend: {
            fontSize: 10
        },
        toolTip: {
            borderThickness: 0,
            content: "<span style='\"'color: {color};'\"'>{name}</span>: ${y} (#percent%)",
            cornerRadius: 0
        },
        data: [{
type: "pie",
showInLegend: true,
toolTipContent: "{name}: <strong>{y} Orang</strong>",
indexLabel: "{name} - {y}",
dataPoints: [
                { y: 43, name: "Banjarharjo"},
                { y: 2, name: "Bantarkawung",},
                { y: 345, name: "Brebes",exploded: true},
                { y: 228, name: "Bulakamba",exploded: true},
                { y: 1, name: "Bumiayu"},
                { y: 78, name: "Jatibarang"},
                { y: 32, name: "Kersana"},
                { y: 22, name: "Ketanggungan"},
                { y: 35, name: "Larangan"},
                { y: 41, name: "Losari"},
                { y: 0, name: "Paguyangan"},
                { y: 1, name: "Salem"},
                { y: 2, name: "Sirampog"},
                { y: 69, name: "Songgom"},
                { y: 250, name: "Tanjung",exploded: true},
                { y: 23, name: "Tonjong"},
                { y: 217, name: "Wanasari",exploded: true}
]
}]
    });
    
    productsRevenuePieChart.render();
    
    //Data Sakit dan meninggal
    var ordersSplineChart = new CanvasJS.Chart("orders-spline-chart", {
        animationEnabled: true,
        backgroundColor: "transparent",
        theme: "theme2",
        toolTip: {
            borderThickness: 0,
            cornerRadius: 0
        },
        axisX: {
            title:"kecamatan",
        },
        legend: {
            cursor:"pointer",
            itemclick : toggleDataSeries
        },
        axisY: {
            gridThickness: 0,
            lineThickness: 3
        },
        data: [
            {type: "column",
            showInLegend: true,
            name: "Sakit",
            color: "#ffd966",
                dataPoints: [
                    { y: 43, label: "Banjarharjo"},
                    { y: 2, label: "Bantarkawung",},
                    { y: 342, label: "Brebes"},
                    { y: 224, label: "Bulakamba"},
                    { y: 1, label: "Bumiayu"},
                    { y: 77, label: "Jatibarang"},
                    { y: 39, label: "Kersana"},
                    { y: 20, label: "Ketanggungan"},
                    { y: 35, label: "Larangan"},
                    { y: 41, label: "Losari"},
                    { y: 0, label: "Paguyangan"},
                    { y: 1, label: "Salem"},
                    { y: 2, label: "Sirampog"},
                    { y: 69, label: "Songgom"},
                    { y: 248, label: "Tanjung"},
                    { y: 23, label: "Tonjong"},
                    { y: 214, label: "Wanasari"}
                ]
            },
            {type: "column",
            showInLegend: true,
            name: "Meninggal",
            color: "#f4b084",
                dataPoints: [
                    { y: 0, label: "Banjarharjo"},
                    { y: 0, label: "Bantarkawung",},
                    { y: 3, label: "Brebes"},
                    { y: 4, label: "Bulakamba"},
                    { y: 0, label: "Bumiayu"},
                    { y: 1, label: "Jatibarang"},
                    { y: 3, label: "Kersana"},
                    { y: 2, label: "Ketanggungan"},
                    { y: 0, label: "Larangan"},
                    { y: 0, label: "Losari"},
                    { y: 0, label: "Paguyangan"},
                    { y: 0, label: "Salem"},
                    { y: 0, label: "Sirampog"},
                    { y: 0, label: "Songgom"},
                    { y: 2, label: "Tanjung"},
                    { y: 0, label: "Tonjong"},
                    { y: 3, label: "Wanasari"}
                ]
            },
            {type: "column",
            showInLegend: true,
            name: "Jumlah Kasus",
            color: "#a5a5a5",
                dataPoints: [
                    { y: 43, label: "Banjarharjo"},
                    { y: 2, label: "Bantarkawung",},
                    { y: 345, label: "Brebes"},
                    { y: 228, label: "Bulakamba"},
                    { y: 1, label: "Bumiayu"},
                    { y: 78, label: "Jatibarang"},
                    { y: 32, label: "Kersana"},
                    { y: 22, label: "Ketanggungan"},
                    { y: 35, label: "Larangan"},
                    { y: 41, label: "Losari"},
                    { y: 0, label: "Paguyangan"},
                    { y: 1, label: "Salem"},
                    { y: 2, label: "Sirampog"},
                    { y: 69, label: "Songgom"},
                    { y: 250, label: "Tanjung"},
                    { y: 23, label: "Tonjong"},
                    { y: 217, label: "Wanasari"}
                ]
            }
        ]
    });
    ordersSplineChart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    }
    else {
        e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    chart.render();
});