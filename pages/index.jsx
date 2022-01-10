import Head from 'next/head'
import Image from 'next/image'
import Walking from '../public/lights/walking.png'
import Stop from '../public/lights/stopsign.png'

export default function Home() {
  const red = document.querySelectorAll('.light-circle-red');
  const yellow = document.querySelectorAll('.light-circle-yellow');
  const green = document.querySelectorAll('.light-circle-green');
  const walk = document.querySelectorAll('.icon-swap-walk');
  const stop = document.querySelectorAll('.icon-swap-stop');
  
  
 function lightChange(){
  setTimeout(changeGreen,5000);
  setTimeout(changeYellow, 10000);
  setTimeout(redLight,13000)
 }


 function changeGreen(){
  if( red[0].classList.contains('active') ){
    red[0].classList.toggle('bg-red-600'); //off red
    red[0].classList.toggle('shadow-red-600');//off red
    red[0].classList.toggle('bg-red-800');//offBG red
    red[0].classList.toggle('active');//off red
  

    green[0].classList.toggle('bg-green-800'); //ON
    green[0].classList.toggle('bg-green-600'); //ONBG
    green[0].classList.toggle('shadow-green-600'); //ONshadow
    green[0].classList.toggle('active')//ONstatus

    walk[0].classList.toggle('hidden');
    stop[0].classList.toggle('hidden');
  };
console.log('green complete')
console.log(green[0].classList)
 
}


 function changeYellow(){
  if( green[0].classList.contains('active') ){
    green[0].classList.toggle('bg-green-600'); //off
    green[0].classList.toggle('shadow-green-600');//off red
    green[0].classList.toggle('bg-green-800');//offBG red
    green[0].classList.toggle('active');//off red
  

    yellow[0].classList.toggle('bg-yellow-800'); //ON
    yellow[0].classList.toggle('bg-yellow-600'); //ONBG
    yellow[0].classList.toggle('shadow-yellow-600'); //ONshadow
    yellow[0].classList.toggle('active')//ONstatus
  
  
  }
console.log('yellow complete')
console.log(yellow[0].classList)

}


 function redLight(){
  if( yellow[0].classList.contains('active') ){
    yellow[0].classList.toggle('bg-yellow-600'); //off
    yellow[0].classList.toggle('shadow-yellow-600');//off red
    yellow[0].classList.toggle('bg-yellow-800');//offBG red
    yellow[0].classList.toggle('active');//off red

    if( green[0].classList.contains('active') ){
      green[0].classList.toggle('bg-green-600'); //off
      green[0].classList.toggle('shadow-green-600');//off red
      green[0].classList.toggle('bg-green-800');//offBG red
      green[0].classList.toggle('active');//off red
    }
  

    red[0].classList.toggle('bg-red-800'); //ON
    red[0].classList.toggle('bg-red-600'); //ONBG
    red[0].classList.toggle('shadow-red-600'); //ONshadow
    red[0].classList.toggle('active')//ONstatus


    walk[0].classList.toggle('hidden');
    stop[0].classList.toggle('hidden');

    console.log('red complete','loop complete')
    console.log(red[0].classList)
  
  
 }
}


console.log(stop[0])
 

  
  
 

  
 



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Stoplight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className="drawing-container flex-col">
  <div className="light-base bg-slate-700 w-[7rem] h-[20rem] rounded-full border-4 border-black grid grid-cols-1 grid-rows-3 justify-center justify-items-center place-items-center relative">

<div className="light-circle-red bg-red-600 shadow-red-600 w-[3.5rem] h-[3.5rem] rounded-full border-2 border-black  shadow-xl active "></div>
<div className="light-circle-yellow bg-yellow-800 w-[3.5rem] h-[3.5rem] rounded-full border-2 border-black shadow-xl"></div>
<div className="light-circle-green bg-green-800 w-[3.5rem] h-[3.5rem] rounded-full border-2 border-black shadow-xl"></div>
  </div>
  
  <div className='light-pole bg-slate-700 w-[1.5rem] h-[5rem] mx-auto justify-center relative -z-10 -mt-3 border-4 border-black'>
  </div>
  <div className='stop-walk-box bg-slate-700 w-30 h-32 mx-auto justify-center relative  -mt-4 border-2 rounded-xl ring-4 ring-black text-center'>
  <div className='hidden icon-swap-walk'>
  <Image src={Walking} width={70} height={120} />
  </div>

  <div className='icon-swap-stop'>
  <Image src={Stop} width={110} height={120} />
  </div>
  </div>
  <div className='light-pole bg-slate-700 w-[1.5rem] h-[5rem] mx-auto justify-center relative -z-10 -mt-3 border-4 border-black'>
  </div>

</div>



<button onClick={ lightChange } className='border-4 p-4 bg-green-600 border-black rounded-xl mt-2 hover:bg-green-300'> Push to Walk </button>




    </div>
  )
}
