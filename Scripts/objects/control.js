/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeed) {
            this.rotationSpeedx = rotationSpeed;
            this.rotationSpeedy = rotationSpeed;
            this.rotationSpeedz = rotationSpeed;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.randomColour = function () {
            head.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            torso.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            rightArm.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            leftArm.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            rightLeg.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            leftLeg.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            rightShoe.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            leftShoe.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map