var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var positions = [
    {
        title: '석호정',  
        latlng: new kakao.maps.LatLng(37.554532030692215, 126.99985287643284 )
    },
    {
        title: '천마정', 
        latlng: new kakao.maps.LatLng(37.64709591896618, 127.12985867039464)
    },
    {
        title: '수락정', 
        latlng: new kakao.maps.LatLng(37.67962926776331, 127.08989301491142)
    },
    {
        title: '난지국궁장',
        latlng: new kakao.maps.LatLng(37.574259408009546, 126.86362296882407)
    },
    {
        title: 'TAC활쏘기클럽',
        latlng: new kakao.maps.LatLng(37.571744719523636, 127.02705998530539)
    },
    {
        title: '활쏘아궁술클럽',
        latlng: new kakao.maps.LatLng(37.633885731121644, 127.07109085830616)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
    setMarkers(map)
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
    setMarkers(null);
}