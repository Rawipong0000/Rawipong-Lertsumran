var Pick_sol = 0
function data_type(x,y){
    console.log(x)
    console.log(y)
    if(x != y){
    if(x == 1){
        var text4 = "ความเร็วปลาย(v)"
        var unit4 = "m/s"
        if(y == 2){
            Pick_sol = 1
            var text1 = "ระยะทาง(s)"
            var unit1 = "m"
            var text2 = "ความเร่ง(a)"
            var unit2 = "m/s^2"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 3){
            Pick_sol = 2
            var text1 = "ความเร็วต้น(u)"
            var unit1 = "m/s"
            var text2 = "ความเร่ง(a)"
            var unit2 = "m/s^2"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 4){
            Pick_sol = 3
            var text1 = "ความเร็วต้น(u)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 5){
            Pick_sol = 4
            var text1 = "ความเร็วต้น(u)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "ความเร่ง(a)"
            var unit3 = "m/s^2"
        }
    }
    if(x == 2){
        var text4 = "ความเร็วต้น(u)"
        var unit4 = "m/s"
        if(y == 1){
            Pick_sol = 5
            var text1 = "ระยะทาง(s)"
            var unit1 = "m"
            var text2 = "ความเร่ง(a)"
            var unit2 = "m/s^2"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 3){
            Pick_sol = 6
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร่ง(a)"
            var unit2 = "m/s^2"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 4){
            Pick_sol = 7
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 5){
            Pick_sol = 8
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "ความเร่ง(a)"
            var unit3 = "m/s^2"
        }
    }
    if(x == 3){
        var text4 = "ระยะทาง(s)"
        var unit4 = "m"
        if(y == 1){
            Pick_sol = 9
            var text1 = "ความเร็วต้น(u)"
            var unit1 = "m/s"
            var text2 = "ความเร่ง(a)"
            var unit2 = "m/s^2"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 2){
            Pick_sol = 10
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร่ง(a)"
            var unit2 = "m/s^2"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 4){
            Pick_sol = 11
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร็วต้น(u)"
            var unit2 = "m/s"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 5){
            Pick_sol = 12
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร็วต้น(u)"
            var unit2 = "m/s"
            var text3 = "ความเร่ง(a)"
            var unit3 = "m/s^2"
        }
    }
    if(x == 4){
        var text4 = "ความเร่ง(a)"
        var unit4 = "m/s^2"
        if(y == 1){
            Pick_sol = 13
            var text1 = "ความเร็วต้น(u)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 2){
            Pick_sol = 14
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 3){
            Pick_sol = 15
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร็วต้น(u)"
            var unit2 = "m/s"
            var text3 = "เวลา(t)"
            var unit3 = "s"
        }
        if(y == 5){
            Pick_sol = 16
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร็วต้น(u)"
            var unit2 = "m/s"
            var text3 = "ระยะทาง(s)"
            var unit3 = "m"
        }
    }
    if(x == 5){
        var text4 = "เวลา(t)"
        var unit4 = "s"
        if(y == 1){
            Pick_sol = 17
            var text1 = "ความเร็วต้น(u)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "ความเร่ง(a)"
            var unit3 = "m/s^2"
        }
        if(y == 2){
            Pick_sol = 18
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ระยะทาง(s)"
            var unit2 = "m"
            var text3 = "ความเร่ง(a)"
            var unit3 = "m/s^2"
        }
        if(y == 3){
            Pick_sol = 19
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร็วต้น(u)"
            var unit2 = "m/s"
            var text3 = "ความเร่ง(a)"
            var unit3 = "m/s^2"
        }
        if(y == 4){
            Pick_sol = 20
            var text1 = "ความเร็วปลาย(v)"
            var unit1 = "m/s"
            var text2 = "ความเร็วต้น(u)"
            var unit2 = "m/s"
            var text3 = "ระยะทาง(s)"
            var unit3 = "m"
        }
    }
    input_data(text1,unit1,text2,unit2,text3,unit3,text4,unit4)
    }
    else{
        alert("ตัวแปลที่ต้องการทราบต้องไม่ใช่ตัวแปรที่โจทย์ไม่ระบุ")
    }
}
function input_data(v1,v2,v3,v4,v5,v6,v7,v8){
  document.getElementById("insert_data").innerHTML =
  "<tr>" +
    "<th scope=\"row\">" +
        "<div class=\"input-group mb-3\" style=\"width:550px;\">" +
            "<span style=\"width:130px;\" class=\"input-group-text\">" + v1 + "</span>" +
            "<input id=\"x\" type=\"text\" class=\"form-control\" aria-label=\"\">" +
            "<span class=\"input-group-text\">" + v2 + "</span>" +
        "</div>"+
    "</th>" +
  "</tr>" + 
  "<tr>" +
    "<th scope=\"row\">" +
        "<div class=\"input-group mb-3\" style=\"width:550px;\">" +
            "<span style=\"width:130px;\" class=\"input-group-text\">" + v3 + "</span>" +
            "<input id=\"y\" type=\"text\" class=\"form-control\" aria-label=\"\">" +
            "<span class=\"input-group-text\">" + v4 + "</span>" +
        "</div>"+
    "</th>" +
    "<th scope=\"row\">" +
        "<button style=\"width:300px;\" onclick=\"Cal(document.getElementById('x').value,document.getElementById('y').value,document.getElementById('z').value)\" type=\"button\" class=\"btn btn-success btn-lg\">Calculate</button>"+
    "</th>" +
    "<th scope=\"row\">" +
        "<div class=\"input-group mb-3\" style=\"width:500px;\">" +
            "<span style=\"width:130px;\" class=\"input-group-text\">" + v7 + "</span>" +
            "<div id=\"result\" class=\"form-control border-success\">"+"</div>" +
            "<span class=\"input-group-text\">" + v8 + "</span>" +
        "</div>"+
    "</th>" +
  "</tr>" +
  "<tr>" +
    "<th scope=\"row\">" +
        "<div class=\"input-group mb-3\" style=\"width:550px;\">" +
            "<span style=\"width:130px;\" class=\"input-group-text\">" + v5 + "</span>" +
            "<input id=\"z\" type=\"text\" class=\"form-control\" aria-label=\"\">" +
            "<span class=\"input-group-text\">" + v6 + "</span>" +
        "</div>"+
    "</th>" +
  "</tr>" 
}

function Cal(x,y,z){
    if(Pick_sol == 1){
        v_and_u(x,y,z)
    }
    else if(Pick_sol == 2){
        v_and_s(x,y,z)
    }
    else if(Pick_sol == 3){
        v_and_a(x,y,z)
    }
    else if(Pick_sol == 4){
        v_and_t(x,y,z)
    }
    else if(Pick_sol == 5){
        u_and_v(x,y,z)
    }
    else if(Pick_sol == 6){
        u_and_s(x,y,z)
    }
    else if(Pick_sol == 7){
        u_and_a(x,y,z)
    }
    else if(Pick_sol == 8){
        u_and_t(x,y,z)
    }
    else if(Pick_sol == 9){
        s_and_v(x,y,z)
    }
    else if(Pick_sol == 10){
        s_and_u(x,y,z)
    }
    else if(Pick_sol == 11){
        s_and_a(x,y,z)
    }
    else if(Pick_sol == 12){
        s_and_t(x,y,z)
    }
    else if(Pick_sol == 13){
        a_and_v(x,y,z)
    }
    else if(Pick_sol == 14){
        a_and_u(x,y,z)
    }
    else if(Pick_sol == 15){
        a_and_s(x,y,z)
    }
    else if(Pick_sol == 16){
        a_and_t(x,y,z)
    }
    else if(Pick_sol == 17){
        t_and_v(x,y,z)
    }
    else if(Pick_sol == 18){
        t_and_u(x,y,z)
    }
    else if(Pick_sol == 19){
        t_and_s(x,y,z)
    }
    else if(Pick_sol == 20){
        t_and_a(x,y,z)
    }
}

function v_and_u(s,a,t){
    let v = 0
    v = (s/t) + (a*t)/2
    console.log(v)
    display(v)
}

function v_and_s(u,a,t){
    let v = 0
    v = parseFloat(u) + (a*t)
    console.log(v)
    display(v)
}

function v_and_a(u,s,t){
    let v = 0
    v = (2*s)/t - parseFloat(u) 
    console.log(v)
    display(v)
}

function v_and_t(u,s,a){
    let v = 0
    v = Math.sqrt((u*u)+(2*a*s))
    console.log(v)
    display(v)
}

function u_and_v(s,a,t){
    let u = 0
    u = (s/t) - (a*t)/2
    console.log(u)
    display(u)
}

function u_and_s(v,a,t){
    let u = 0
    u = parseFloat(v) - (a*t)
    console.log(u)
    display(u)
}

function u_and_a(v,s,t){
    let u = 0
    u = (2*s)/t - parseFloat(v) 
    console.log(u)
    display(u)
}

function u_and_t(v,s,a){
    let u = 0
    u = Math.sqrt((v*v)-(2*a*s))
    console.log(u)
    display(u)
}

function s_and_v(u,a,t){
    let s = 0
    s = (u*t) + (a*t*t)/2
    console.log(s)
    display(s)
}

function s_and_u(v,a,t){
    let s = 0
    s = (v*t) - (a*t*t)/2
    console.log(s)
    display(s)
}

function s_and_a(v,u,t){
    let s = 0
    s = (parseFloat(u)+parseFloat(v))*t/2 
    console.log(s)
    display(s)
}

function s_and_t(v,u,a){
    let s = 0
    s = ((v*v)-(u*u))/(2*a)
    console.log(s)
    display(s)
}

function a_and_v(u,s,t){
    let a = 0
    a = (2*(s-u*t))/(t*t)
    console.log(a)
    display(a)
}

function a_and_u(v,s,t){
    let a = 0
    a = -(2*(s-v*t))/(t*t)
    console.log(a)
    display(a)
}

function a_and_s(v,u,t){
    let a = 0
    a = (v-u)/t 
    console.log(a)
    display(a)
}

function a_and_t(v,u,s){
    let a = 0
    a = ((v*v)-(u*u))/(2*s)
    console.log(a)
    display(a)
}

function t_and_v(u,s,a){
    let i = 0
    let x = 0
    let j = 0
    let y = 0
    if(s < 0){
        var st = -s
    }
    else{
        var st = s
    }
    if(a < 0){
        var at = -a
    }
    else{
        var at = a
    }
    for(i=-st; i <= st; i++){
        for(x=-st; x <= st; x++){
            if(-s-(i*x) == 0){
                for(j=-at/2; j <= at/2; j++){
                    for(y=-at/2; y <= at/2; y++){
                        if(a/2-(j*y) == 0){
                            if((i*y) + (j*x) == u){
                                let t = 0
                                t = -i/j
                                if(t >= 0){
                                    display(t)
                                }
                                else{
                                    t = x/y
                                    if(t >= 0){
                                        display(t)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function t_and_u(v,s,a){
    let i = 0
    let x = 0
    let j = 0
    let y = 0
    if(s < 0){
        var st = -s
    }
    else{
        var st = s
    }
    if(a < 0){
        var at = -a
    }
    else{
        var at = a
    }
    for(i=-st; i <= st; i++){
        for(x=-st; x <= st; x++){
            if(s-(i*x) == 0){
                for(j=-at/2; j <= at/2; j++){
                    for(y=-at/2; y <= at/2; y++){
                        if(a/2-(j*y) == 0){
                            if((i*y) + (j*x) == -v){
                                let t = 0
                                t = -i/j
                                if(t >= 0){
                                    display(t)
                                }
                                else{
                                    t = x/y
                                    if(t >= 0){
                                        display(t)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function t_and_s(v,u,a){
    let t = 0
    t = (v-u)/a 
    console.log(t)
    display(t)
}

function t_and_a(v,u,s){
    let t = 0
    t = (2*s)/(u+v)
    console.log(t)
    display(t)
}

function display(ans){
    document.getElementById("result").innerHTML = ans.toFixed(3)
}






