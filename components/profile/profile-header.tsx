import React from 'react'


interface HeaderProps{

    photoUrl:string,
    name:string,
    joined:Date,
    bio:string

}



function ProfileHeader({headerInfo}:{headerInfo:HeaderProps}) {
  return (
    <div className='w-1/2 flex items-center justify-center'>
        
    </div>
  )
}

export default ProfileHeader