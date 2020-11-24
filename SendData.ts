function send_data(pins_touched : number[]) : void {
    /*Envoie un code correspondant aux pins touches
    La correspondance est disponible sur le repertoire github */

    pins_touched.sort()

    switch(pins_touched) {
        case [1, 3]: // N
            radio.sendNumber(110);
            break;
        
        case [2, 3]: // S
            radio.sendNumber(120);
            break;
        
        case [3, 4]: // E
            radio.sendNumber(101);
            break;
        
        case [3, 10]: // W
            radio.sendNumber(102);
            break;
        
        case [0, 1]: // NE
            radio.sendNumber(111);
            break;
        
        case [0, 10]: // NW
            radio.sendNumber(112);
            break;
        
        case [2, 4]: // SE
            radio.sendNumber(121);
            break;
        
        case [4, 10]: // SW
            radio.sendNumber(122);
            break;
        
        case [1, 2]: // T
            radio.sendNumber(150);
            break;
        
        case [1, 10]: // R
            radio.sendNumber(160)

        default:
            radio.sendNumber(10); // Error pin
            break;
    }
}