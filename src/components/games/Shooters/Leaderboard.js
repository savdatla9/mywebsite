import { usePlayersList } from "playroomkit";
import React, { useState, Fragment } from 'react'; 
import { Image } from "react-bootstrap";

import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";

export const Leaderboard = () => {
  const players = usePlayersList(true);

  const [isfull, setFull] = useState(false);

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen(); setFull(false);
    } else {
      document.documentElement.requestFullscreen(); setFull(true);
    }
  };

  return (
    <Fragment>
      <div style={{position: 'fixed', top: 5, left: 5, right: 0, display: 'flex', zIndex: 10, gap: 4}}>
        {players.map((player) => (
          <div
            key={player.id}
            style={{backgroundColor: '#cccccc50', padding: 5, borderRadius: 5}}
          >
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <div>&nbsp;&nbsp;&nbsp;</div>

              <div style={{width: '50%'}}>
                <Image
                  src={player.state.profile?.photo || ""}
                  className="w-10 h-10 border-2" roundedCircle
                  style={{borderColor: player.state.profile?.color, width: 65, height: 'auto'}}
                />
              </div>
              
              <div style={{width: '50%'}}>
                <h3 className='font-bold'>
                  {player.state.profile?.name}
                </h3>
              </div>

              <div>&nbsp;&nbsp;&nbsp;</div>
            </div>

            <div className="flex-grow" style={{display: 'flex', flexDirection: 'row'}}>
              <div className="text-sm items-center gap-4">
                <p>🔫 {player.state.kills}</p>
              </div>

              <div>&nbsp;&nbsp;&nbsp;</div>

              <div className="text-sm items-center gap-4">
                <p>💀 {player.state.deaths}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        style={{position: 'fixed', top: 4, right: 4, zIndex: 10, color: "white", backgroundColor: "transparent", border: '0px solid', boxShadow: 'none'}}
        onClick={() => handleFullscreen()}
      >
        {isfull===false ? <AiOutlineFullscreen style={{fontSize: 35}} /> : <AiOutlineFullscreenExit style={{fontSize: 35}} />}
      </button>
    </Fragment>
  );
};