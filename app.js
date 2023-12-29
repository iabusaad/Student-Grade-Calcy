const calcy = () => {
  let wp = document.getElementById("wp").value;
  let math = document.getElementById("math").value;
  let comp = document.getElementById("comp").value;
  let phy = document.getElementById("phy").value;

  let totalGrades =
        parseFloat(wp) + parseFloat(math) + parseFloat(comp) + parseFloat(phy);
    
    let perc = (totalGrades / 400) * 100;
    alert(perc)
    
    if (perc<=100 && perc>=80) {
       grade='A' 
    }else if (perc<=79 &&perc>=60) {
        grade='B'
    }else if (perc<=59 &&perc>=40) {
        grade='C'
    } else {
        grade='F'
    }
    document.getElementById('showdata').innerHTML = `out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br>
     and your grade is ${grade}.`
};
