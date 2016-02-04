/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
       public rotationSpeedx:number;
       public rotationSpeedy:number;
       public rotationSpeedz:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeed:number) {
           this.rotationSpeedx = rotationSpeed;
           this.rotationSpeedy = rotationSpeed;
           this.rotationSpeedz = rotationSpeed;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       public randomColour(): void {
            head.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            torso.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            rightArm.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            leftArm.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            rightLeg.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            leftLeg.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            rightShoe.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            leftShoe.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
        }
    }
}
