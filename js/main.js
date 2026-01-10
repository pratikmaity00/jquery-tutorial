// $(document).ready(()=>{})
$(() => {
  // $('selector').event()
  //   $(".btn1").click(() => {
  //     alert(`Clicked`);
  //   });
  //   $(".btn2").dblclick(() => {
  //     alert(`Double Clicked`);
  //   });
  // $('.btn3').mouseover(()=>{
  //     alert(`Mouse Over`)
  // })
  // $('.btn4').mouseleave(()=>{
  //     alert(`Mouse Leave`)
  // })
  // new process which take multiple event
  //   $(".btn3").on({
  //     mouseover: () => {
  //         $('.btn3').css("background-color", "coral")
  //       console.log("mouseover");
  //     },
  //     mouseleave: () => {
  //         $('.btn3').css("background-color", "initial")
  //       console.log("mouseleave");
  //     },
  //   });
  

  // hide
    // $('.hide').on('click',()=>{
    // // $('.para1').hide()
    //  // $('.para1').hide(1500)
    //     // $('.para1').hide(1500,()=>{
    //     //     console.log('Hidding done');
    //     // })
    // });

    // show
    // $('.para1').hide();
    // $('.show').on('click',()=>{
    //     // $('.para1').show()
    //     // $('.para1').show(1500)
    //     $('.para1').show(1000,()=>{
    //         console.log('Shown');
    //     });
    //     $(this).hide();
    // });


    // project
    $('.more-text1').hide();
    $('.more-text2').hide();
    $('.more-text3').hide();
    $('.more1').on('click',()=>{
        $('.more-text1').show(500);
        $('.more1').hide();
    });
    $('.more2').on('click',()=>{
        $('.more-text2').show(500);
        $('.more2').hide();
    });
    $('.more3').on('click',()=>{
        $('.more-text3').show(500);
        $('.more3').hide();
    });
    $('.less1').on('click',()=>{
        $('.more-text1').hide(500);
        $('.more1').show();
    })
    $('.less2').on('click',()=>{
        $('.more-text2').hide(500);
        $('.more2').show();
    })
    $('.less3').on('click',()=>{
        $('.more-text3').hide(500);
        $('.more3').show();
    })
});
