



const slotDisplay = () => {

    const reels = [
        ['🍒', '🍋', '🍊'],
        ['🔔', '💰', '🍒'],
        ['🍋', '🍊', '🔔'],
    ];
    
    for(o = 0; o < 3; o++){
        let rowDisplay = '';
        for(i = 0; i < 3; i++){
            rowDisplay  += reels[o][i] + " "
        }
        
        console.log(rowDisplay)
    }
   

    
}

slotDisplay()
