function a2d(pin : AnalogPin) : boolean {
    /* Transforme une valeur analogique en une valeur numerique 
     * suivant la limite definie */
    let limit: number = 325;
    if(pins.analogReadPin(pin) >= limit) {
        return true;
    }
    else {
        return false;
    }
}

let game_ = true;
while(game_) {
    if(a2d(AnalogPin.P1) && a2d(AnalogPin.P3)) {
        send_data([1, 3]);
    }
    else if(a2d(AnalogPin.P2) && a2d(AnalogPin.P3)) {
        send_data([2, 3]);
    }
    else if(a2d(AnalogPin.P3) && a2d(AnalogPin.P4)) {
        send_data([3, 4]);
    }
    else if(a2d(AnalogPin.P3) && a2d(AnalogPin.P10)) {
        send_data([3, 10]);
    }
    else if(a2d(AnalogPin.P0) && a2d(AnalogPin.P1)) {
        send_data([0, 1]);
    }
    else if(a2d(AnalogPin.P0) && a2d(AnalogPin.P10)) {
        send_data([0, 10]);
    }
    else if(a2d(AnalogPin.P2) && a2d(AnalogPin.P4)) {
        send_data([2, 4]);
    }
    else if(a2d(AnalogPin.P4) && a2d(AnalogPin.P10)) {
        send_data([4, 10]);
    }
    else if(a2d(AnalogPin.P1) && a2d(AnalogPin.P2)) {
        send_data([1, 2]);
    }
    else if(a2d(AnalogPin.P1) && a2d(AnalogPin.P10)) {
        send_data([1, 10]);
    }
}
