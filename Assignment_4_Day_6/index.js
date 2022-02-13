var songs=[
    {
        id:1,
        ImageSrc :"./thumbnails/Screenshot 2022-02-12 222658.png",
        audioSrc :"./songs/Master - Vaathi Coming Video _ Thalapathy Vijay _ Anirudh Ravichander _ Lokesh Kanagaraj.mp3",
        title : "Vaathi - Anirudh Ravichandra"
    },
    {
        id:2,
        ImageSrc :"./thumbnails/Screenshot 2022-02-12 222725.png",
        audioSrc :"./songs/Maari - Maari Thara Local Video _ Dhanush _ Anirudh Ravichander.mp3",
        title : "Maari - Dhanush & Anirudh"
    },
    {
        id :3,
        ImageSrc :"./thumbnails/Screenshot 2022-02-12 222757.png",
        audioSrc :"./songs/Vidya Vox - Be Free (Pallivaalu Bhadravattakam) ft. Vandana Iyer.mp3",
        title : "Be Free - Vidya Vox"
    },
    {
        id :4,
        ImageSrc :"./thumbnails/fearless.png",
        audioSrc :"./songs/Lost Sky - Fearless [NCS Release].mp3",
        title : "Fearless - Lost Sky"
    },
    {
        id :5,
        ImageSrc :"./thumbnails/gadi gung.png",
        audioSrc :"./songs/Gaadi .mp3",
        title : "Gadi - Marathi Song"
    },
    {
        id:6,
        ImageSrc :"./thumbnails/YArr anmule.png",
        audioSrc :"./songs/Yaar Anmulle (Full Video) _ Sharry Mann _ Babbu _ Latest Punjabi Songs _ Speed Records Classic Hitz.mp3",
        title : "Yaar Anmulle - Sharry Mann"
    },
    {
        id:7,
        ImageSrc :"./thumbnails/Badnaam.png",
        audioSrc :"./songs/Badnam _ Mankirt Aulakh Feat Dj Flow _ Sukh Sanghera _ Singga _ Speed Records.mp3",
        title : "Badnaam - Malkirt Aulakh"
    },
    {
        id:8,
        ImageSrc :"./thumbnails/amplifier.png",
        audioSrc :"./songs/Imran Khan - Amplifier (Official Music Video).mp3",
        title : "Amplifier - Imran Khan"
    }
]

function playAudio(songid)
{
    var song= songs.find(function(song,index){
        return song.id===songid
    });
    document.getElementById("thumbnails").src=song.ImageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText =song.title;
}