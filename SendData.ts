function send_data(pins_touched : number[]) : void {
    /*Envoie un code correspondant aux pins touches
    La correspondance est disponible sur le repertoire github */

    pins_touched.sort();
    
    switch(JSON.stringify(pins_touched)) {
        case JSON.stringify([1, 3]): // N
            basic.showNumber(110);
            radio.sendNumber(110);
            break;
        
        case JSON.stringify([2, 3]): // S
            basic.showNumber(120);
            radio.sendNumber(120);
            break;
        
        case JSON.stringify([3, 4]): // E
            basic.showNumber(101);
            radio.sendNumber(101);
            break;
        
        case JSON.stringify([3, 10]): // W
            basic.showNumber(102);
            radio.sendNumber(102);
            break;
        
        case JSON.stringify([0, 1]): // NE
            basic.showNumber(111);
            radio.sendNumber(111);
            break;
        
        case JSON.stringify([0, 10]): // NW
            basic.showNumber(112);
            radio.sendNumber(112);
            break;
        
        case JSON.stringify([2, 4]): // SE
            basic.showNumber(121);
            radio.sendNumber(121);
            break;
        
        case JSON.stringify([4, 10]): // SW
            basic.showNumber(122);
            radio.sendNumber(122);
            break;
        
        case JSON.stringify([1, 2]): // T
            basic.showNumber(150);
            radio.sendNumber(150);
            break;
        
        case JSON.stringify([1, 10]): // R
            basic.showNumber(160);
            radio.sendNumber(160);
            break;

        default:
            basic.showNumber(10);
            radio.sendNumber(10); // Error pin
            break;
    }
}