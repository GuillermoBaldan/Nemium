$navsetup = document.querySelector("#setup");
$navconceptos = document.querySelector("#conceptos");

$navsetup.addEventListener('click', handleNavSetup)
$navconceptos.addEventListener('click', handleNavConceptos)

function handleNavSetup(){
    console.log("Has pulsado Setup")
    if($navconceptos.open){
        $navconceptos.open = false;
    }
}

function handleNavConceptos(){
    console.log("Has pulsado conceptos")
    if($navsetup.open){
        $navsetup.open = false;
    }
}
