//action creater
//named export, you need the curly braces later
export const selectSong = () =>{
    //return an action
    return{
        type:"SONG_SELECTED",
        payload:song
    };
};

