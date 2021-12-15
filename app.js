$(document).ready(function(){
    // in all following arrays index [0] reffers to width and index [1] reffers to height
    // getting some constants of the game
    const pageDimension = [$("body").width(), $("body").height()]
    const plateDimension = [$("#container #plate").width(), $("#container #plate").height()]
    const plateRelativePosition = $("#container #plate").position();

    // const plateRotation = $("#container #plate").css("transform");
    
    // calculating some constants of the game
    const plateAbsolutePosition = [((pageDimension[0]-plateDimension[0])/2) , ((pageDimension[1]-plateDimension[1])/2)];
    const centerLine = [(plateDimension[0]/2) , (plateDimension[1]/2)]

    const tl = new TimelineMax();
    
    $("#container #plate").mouseenter(function(event){
        // mouseRelativeCoordinate is relative to the centerline of the plate
        let mouseRelativeCoordinate = [(event.pageX-plateAbsolutePosition[0])-centerLine[0] , (event.pageY-plateAbsolutePosition[1])-centerLine[1]];
        let rotateDegree = [(mouseRelativeCoordinate[0]/centerLine[0])*(20) , (mouseRelativeCoordinate[1]/centerLine[1])*(-20)];        
        let currentRotation = $(this).css("transform");
        console.log(rotateDegree)
        tl.fromTo(
            $(this), 0.1,
            {transform: currentRotation},
            {transform: `translate(-50%, -50%) rotateX(${rotateDegree[1]}deg) rotateY(${rotateDegree[0]}deg)`}
        )
    });
    $("#container #plate").mousemove(function(event){
        // mouseRelativeCoordinate is relative to the centerline of the plate
        let mouseRelativeCoordinate = [(event.pageX-plateAbsolutePosition[0])-centerLine[0] , (event.pageY-plateAbsolutePosition[1])-centerLine[1]];
        let rotateDegree = [(mouseRelativeCoordinate[0]/centerLine[0])*(20) , (mouseRelativeCoordinate[1]/centerLine[1])*(-20)];        
        let currentRotation = $(this).css("transform");
        console.log(rotateDegree)
        tl.fromTo(
            $(this), 0,
            {transform: currentRotation},
            {transform: `translate(-50%, -50%) rotateX(${rotateDegree[1]}deg) rotateY(${rotateDegree[0]}deg)`}
        )
    });
});