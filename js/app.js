(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [ 55.753994, 37.622093 ],
            zoom: 9,
            controls: [ "routePanelControl" ]
        });
        var control = myMap.controls.get("routePanelControl");
        control.routePanel.state.set({
            type: "masstransit",
            fromEnabled: false,
            from: "Москва, Льва Толстого 16",
            toEnabled: true
        });
        control.routePanel.options.set({
            allowSwitch: false,
            reverseGeocoding: true,
            types: {
                masstransit: true,
                pedestrian: true,
                taxi: true
            }
        });
        var switchPointsButton = new ymaps.control.Button({
            data: {
                content: "Поменять местами",
                title: "Поменять точки местами"
            },
            options: {
                selectOnClick: false,
                maxWidth: 160
            }
        });
        switchPointsButton.events.add("click", (function() {
            control.routePanel.switchPoints();
        }));
        myMap.controls.add(switchPointsButton);
    }
    const chatBtn = document.querySelector(".chatbox__button");
    const chatBox = document.querySelector(".chatbox");
    const chatBtnClose = document.querySelector(".chatbox__close-btn");
    const toggleMenu = function() {
        chatBox.classList.toggle("open");
    };
    const closeMenu = function() {
        chatBox.classList.remove("open");
    };
    chatBtn.addEventListener("click", (function(e) {
        e.stopPropagation();
        toggleMenu();
    }));
    chatBtnClose.addEventListener("click", (function(e) {
        e.stopPropagation();
        closeMenu();
    }));
    window["FLS"] = true;
    isWebp();
})();