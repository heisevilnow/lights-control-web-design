
function create_iot(name){
    const div_main = document.createElement("div");
    div_main.className = "main";
    const div_khoi1 = document.createElement("div");
    div_khoi1.className = "khoi1";
    div_main.appendChild(div_khoi1);
    const input = document.createElement("input");
    input.type = "range";
    input.min = 0;
    input.max = 100;
    input.value = 50;
    input.className = "k1";
    const div_sun1 = document.createElement("div");
    div_sun1.className = "sun1"
    const div_sun2 = document.createElement("div");
    div_sun2.className = "sun2"
    div_khoi1.appendChild(input);
    div_khoi1.appendChild(div_sun1);
    div_khoi1.appendChild(div_sun2);

    const div_khoi2 = document.createElement("div");
    div_khoi2.className = "khoi2";
    const div_mau0 = document.createElement("div");
    div_mau0.className = "mau0";
    div_mau0.classList.add("mau");
    const div_mau1 = document.createElement("div");
    div_mau1.className = "mau1";
    div_mau1.classList.add("mau");
    const div_mau2 = document.createElement("div");
    div_mau2.className = "mau2";
    div_mau2.classList.add("mau");
    const div_mau3 = document.createElement("div");
    div_mau3.className = "mau3";
    div_mau3.classList.add("mau");
    const div_mau4 = document.createElement("div");
    div_mau4.className = "mau4";
    div_mau4.classList.add("mau");
    const div_mau5 = document.createElement("div");
    div_mau5.className = "mau5";
    div_mau5.classList.add("mau");
    const i1 = document.createElement("i");
    i1.className = "fa-solid fa-circle-plus";
    const input1 = document.createElement("input");
    input1.className = "themmau";
    input1.type ="Color";
    div_mau5.appendChild(i1);
    div_mau5.appendChild(input1);
    div_khoi2.appendChild(div_mau0);
    div_khoi2.appendChild(div_mau1);
    div_khoi2.appendChild(div_mau2);
    div_khoi2.appendChild(div_mau3);
    div_khoi2.appendChild(div_mau4);
    div_khoi2.appendChild(div_mau5);

    div_main.appendChild(div_khoi2);
    const div_power = document.createElement("div");
    div_power.className = "power";
    const i_power = document.createElement("i");
    i_power.className = "fa-solid fa-power-off";
    i_power.classList.add("maupower");
    div_power.appendChild(i_power);
    div_main.appendChild(div_power);


    const div_alamp = document.createElement("div");
    div_alamp.className = "alamp";
    const img1 = document.createElement("img");
    img1.src = "./img/dinner.png";
    const div1 = document.createElement("div");
    div1.className = "maumacdinh";
    div1.classList.add("circle");
    div_alamp.appendChild(img1);
    div_alamp.appendChild(div1);

    div_main.appendChild(div_alamp);

    const div_mode1 = document.createElement("div");
    div_mode1.className = "mode1";
    const i3 = document.createElement("i");
    i3.className = "fa-solid fa-gear";
    const span1 = document.createElement("span");
    span1.textContent = "Auto adjust";
    const label1 = document.createElement("label");
    label1.className = "toggle";
    const input2 = document.createElement("input");
    input2.className = "toggle__input";
    input2.type = "checkbox";
    input2.classList.add("switch");
    const div_togglefill = document.createElement("div");
    div_togglefill.className = "toggle__fill";
    label1.appendChild(input2);
    label1.appendChild(div_togglefill);
    div_mode1.appendChild(i3);
    div_mode1.appendChild(span1);
    div_mode1.appendChild(label1);
    div_main.appendChild(div_mode1);

    const div_scrollshadow = document.createElement("div");
    div_scrollshadow.className = "scroll-shadow";
    const input3 = document.createElement("input");
    input3.type = "range";
    input3.min = "100";
    input3.max = "400";
    input3.value = "250";
    input3.className = "brightness";
    div_scrollshadow.appendChild(input3);
    div_main.appendChild(div_scrollshadow);
    
    const div_container = document.querySelector(name);
    div_container.appendChild(div_main);
    //////////////////////////////////////////////////////////////////
    var power = document.querySelector(name+" .power");     
    var maupower = document.querySelector(name+" .maupower"); 
    var light = document.querySelector(name+" .circle");
    var color0 = document.querySelector(name+" .mau0");
    var color1 = document.querySelector(name+" .mau1");
    var color2 = document.querySelector(name+" .mau2");
    var color3 = document.querySelector(name+" .mau3");
    var color4 = document.querySelector(name+" .mau4");
    var color_macdinh = document.querySelector(name+" .maumacdinh");
    var themmau = document.querySelector(name+" .themmau");
    var khoi1 = document.querySelector(name+" .k1");
    var brightness = document.querySelector(name+" .brightness");
    var sw = document.querySelector(name+" .switch");
    var power = document.querySelector(name+ " .power");     
     //////////////////////////////////////////////////////////////////
    var flag = 0;
    var flag_sw = 0;
    var mht = "white";
    var x = brightness.value/10;
    var y = x.toString()+"px";
    maupower.setAttribute("style","color:green;");
    light.style.opacity = "0.5";
    var lock = 1;
    power.addEventListener("mousedown", e => {
        light.classList.toggle("maumacdinh");
        color0.style.border = "none";
        color1.style.border = "none";
        color2.style.border = "none";
        color3.style.border = "none";
        color4.style.border = "none";
        lock = lock + 1;
        if(lock%2 == 0)
        {
            light.classList.remove("maumacdinh");
            light.style.boxShadow = "none";
            light.style.backgroundColor = "";
            khoi1.style.backgroundColor = "";
            maupower.style.color = "red";
            light.classList.remove("mau01");
            light.classList.remove("mau11");
            light.classList.remove("mau21");
            light.classList.remove("mau31");
            light.classList.remove("mau41"); 
            khoi1.classList.remove("mau01");
            khoi1.classList.remove("mau11");
            khoi1.classList.remove("mau21");
            khoi1.classList.remove("mau31");
            khoi1.classList.remove("mau41"); 
            console.log("Tắt Đèn");
        }
        else
        {
            light.style.boxShadow = `0px 5px ${y} 10px white`;
            mht = "white";

            maupower.style.color = "green";
            console.log("Bật Đèn");
        }
    });

    var z;
    brightness.oninput = function(){
        if(lock%2 !=0 && flag_sw == 0)
        {
            x = brightness.value/10;
            y = x.toString()+"px";
            z = brightness.value;
            if(mht == "aqua")
            {
                light.style.boxShadow = `0px 5px ${y} 10px aqua`;
            }
            else if(mht == "red")
            {
                light.style.boxShadow = `0px 5px ${y} 10px red`;
            }
            else if(mht == "yellow")
            {
                light.style.boxShadow = `0px 5px ${y} 10px yellow`;
            }
            else if(mht == "rgb(0, 255, 72)")
            {
                light.style.boxShadow = `0px 5px ${y} 10px rgb(0, 255, 72)`;
            }
            else if(mht == themmau.value)
            {
                light.style.boxShadow = `0px 5px ${y} 10px ${themmau.value}`;
            }
            else if(mht == "white")
            {
                light.style.boxShadow = `0px 5px ${y} 10px white`;
            }
            else if(mht == "pink")
            {
                light.style.boxShadow = `0px 5px ${y} 10px pink`;
            }
            console.log(brightness.value);
        }
        else
        {
            brightness.value = z;
        }
        if(flag_sw==1)
        {
            z = 250;
            brightness.value = z;
        }

    }
    var z1;
    khoi1.oninput = function(){
        if(lock%2!=0 && flag_sw == 0)
        {
            light.style.opacity = (1-khoi1.value/100) + 0.1 ;
            z1 = khoi1.value;
            var tam = (1-khoi1.value/100)*100;
            console.log("Độ sáng: " + tam + "%"); 
        }
        else
        {
            khoi1.value = z1;
        }
        if(flag_sw==1)
        {
            z1 = 50;
            khoi1.value = z1;
        }
    }
    color0.addEventListener("click", e => {
        if(lock%2!=0)
        {
            light.classList.add("mau01");
            light.style.boxShadow = `0px 5px ${y} 10px pink`;
            khoi1.style.boxShadow = `none`;
            color0.style.border = "2px solid white";
            color1.style.border = "none";
            color2.style.border = "none";
            color3.style.border = "none";
            color4.style.border = "none";

            color0.setAttribute("style","border: 2px solid white");
            mht = "pink";
            if(flag==1)
            {
                light.style.backgroundColor = "pink";
                khoi1.style.backgroundColor = "pink";
            }
            light.classList.remove("mau11");
            light.classList.remove("mau21");
            light.classList.remove("mau31");
            light.classList.remove("mau41");   
            light.classList.remove("maumacdinh");
            khoi1.classList.add("mau01");
            khoi1.classList.remove("mau11");
            khoi1.classList.remove("mau21");
            khoi1.classList.remove("mau31");
            khoi1.classList.remove("mau41");  
            console.log("Bạn đã chọn màu 0");  
        }
    });
    color1.addEventListener("click", e => {
        if(lock%2!=0)
        {
            light.classList.add("mau11");
            light.style.boxShadow = `0px 5px ${y} 10px aqua`;
            khoi1.style.boxShadow = `none`;
            color1.style.border = "2px solid white";
            color0.style.border = "none";
            color2.style.border = "none";
            color3.style.border = "none";
            color4.style.border = "none";
            mht = "aqua";
            if(flag==1)
            {
                light.style.backgroundColor = "aqua";
                khoi1.style.backgroundColor = "aqua";
            }
            light.classList.remove("mau01");
            light.classList.remove("mau21");
            light.classList.remove("maumacdinh");
            light.classList.remove("mau31");
            light.classList.remove("mau41");   
            khoi1.classList.remove("mau01");
            khoi1.classList.add("mau11");
            khoi1.classList.remove("mau21");
            khoi1.classList.remove("mau31");
            khoi1.classList.remove("mau41");  
            console.log("Bạn đã chọn màu 1");
        }
    });
    color2.addEventListener("click", e => {
        if(lock%2!=0)
        {
            light.classList.add("mau21"); 
            light.style.boxShadow = `0px 5px ${y} 10px red`;
            khoi1.style.boxShadow = `none`;
            color2.style.border = "2px solid white";
            color0.style.border = "none";
            color1.style.border = "none";
            color3.style.border = "none";
            color4.style.border = "none";
            mht = "red";
            if(flag==1)
            {
                light.style.backgroundColor = "red";
                khoi1.style.backgroundColor = "red";
            }       
            light.classList.remove("mau01");
            light.classList.remove("mau11");
            light.classList.remove("mau31");
            light.classList.remove("mau41");
            light.classList.remove("maumacdinh");
            khoi1.classList.add("mau21");
            khoi1.classList.remove("mau01");
            khoi1.classList.remove("mau11");
            khoi1.classList.remove("mau31");
            khoi1.classList.remove("mau41");
            console.log("Bạn đã chọn màu 2");
        }
    });
    color3.addEventListener("click", e => {
        if(lock%2!=0)
        {
            light.classList.add("mau31");
            light.style.boxShadow = `0px 5px ${y} 10px yellow`;
            khoi1.style.boxShadow = `none`;
            color3.style.border = "2px solid white";
            color0.style.border = "none";
            color1.style.border = "none";
            color2.style.border = "none";
            color4.style.border = "none";
            mht = "yellow";
            if(flag==1)
            {
                light.style.backgroundColor = "yellow";
                khoi1.style.backgroundColor = "yellow";
            }
            light.classList.remove("mau01");
            light.classList.remove("mau11");
            light.classList.remove("mau21");
            light.classList.remove("mau41");
            light.classList.remove("maumacdinh");
            khoi1.classList.add("mau31");
            khoi1.classList.remove("mau01");
            khoi1.classList.remove("mau11");
            khoi1.classList.remove("mau21");
            khoi1.classList.remove("mau41");
            console.log("Bạn đã chọn màu 3");
        }
    });
    color4.addEventListener("click", e => {
        if(lock%2!=0)
        {
            light.classList.add("mau41");
            light.style.boxShadow = `0px 5px ${y} 10px rgb(0, 255, 72)`;
            khoi1.style.boxShadow = `none`;
            color4.style.border = "2px solid white";
            color0.style.border = "none";
            color1.style.border = "none";
            color2.style.border = "none";
            color3.style.border = "none";
            mht = "rgb(0, 255, 72)";
            if(flag==1)
            {
                light.style.backgroundColor = "rgb(0, 255, 72)";
                khoi1.style.backgroundColor = "rgb(0, 255, 72)";
            }
            light.classList.remove("mau01");
            light.classList.remove("mau11");
            light.classList.remove("mau21");
            light.classList.remove("mau31");
            light.classList.remove("maumacdinh");
            khoi1.classList.add("mau41");
            khoi1.classList.remove("mau01");
            khoi1.classList.remove("mau11");
            khoi1.classList.remove("mau21");
            khoi1.classList.remove("mau31");
            console.log("Bạn đã chọn màu 4");
        }
    });
    themmau.oninput= function(){
        if(lock%2!=0 && flag_sw==0)
        {
            light.style.backgroundColor = themmau.value;
            khoi1.style.backgroundColor = themmau.value;
            light.style.boxShadow = `0px 5px ${y} 10px ${themmau.value}`;
            mht = themmau.value;
            flag = 1;
        }
    }
    sw.onclick = function(){
        if(lock%2!=0)
        {
            if(flag_sw==0)
            {
                khoi1.value = 50;
                brightness.value = 250;
                light.style.opacity = 0.5;
                if(mht == "aqua")
                {
                    light.style.boxShadow = `0px 5px 20px 10px aqua`;
                }
                else if(mht == "red")
                {
                    light.style.boxShadow = `0px 5px 20px 10px red`;
                }
                else if(mht == "yellow")
                {
                    light.style.boxShadow = `0px 5px 20px 10px yellow`;
                }
                else if(mht == "rgb(0, 255, 72)")
                {
                    light.style.boxShadow = `0px 5px 20px 10px rgb(0, 255, 72)`;
                }
                else if(mht == themmau.value)
                {
                    light.style.boxShadow = `0px 5px 20px 10px ${themmau.value}`;
                }
                flag_sw=1;
                console.log("Bật chế độ auto");
            }
            else
            {
                flag_sw=0;
                console.log("Tắt chế độ auto");
            }
        }
        else if(lock%2==0 && flag_sw == 0)
        {
            flag_sw = 1;
            console.log("Bật chế độ auto");
        }

        else if(lock%2==0 && flag_sw ==1)
        {
            flag_sw=0;
            console.log("Tắt chế độ auto");
        }
    }
}