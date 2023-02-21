
    const textnya = document.querySelector('.status');
    const warn = document.querySelector('.warn');
    var apikey = document.getElementById("responapikeymucoooookkk")
    const amlert = document.querySelector('.alert-danger');
    apikey.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.getElementById("diklikcok").click();
      }
    });

    function sendata() {
      if (apikey.value == '') {
        alert("Masukkan apikeymu!", "", "error");
      } else {
        var xhr = new XMLHttpRequest();
        var url = `/api/cekapikey?apikey=${apikey.value}`;
        xhr.onloadend = function () {

          data = JSON.parse(this.responseText);
          if (data.status == true) {
            textnya.innerHTML = '[ INFO ] Status Apikey anda adalah Active <br><br>' + 'Ip: ' + data.response.ip + '<br>------------------------<br>' + 'nama: ' + data.response.name + '<br>------------------------<br>' + 'email: ' + data.response.email + '<br>------------------------<br>' + 'apikey: ' + data.response.apikey + '<br>------------------------<br>' + 'totalhit: ' + data.response.totalhit + '<br>------------------------<br>' + 'premium: ' + data.response.premium + '<br>------------------------<br>' + 'expired: ' + data.response.expired 

            swal("Apikey valid!", 'Status Apikey anda adalah Active', "success");
            warn.textContent = ''
          } else {
            textnya.textContent = '[ INFO ] Apikey anda tidak valid!'
            swal("Apikey Tidak Valid!", "", "error");
            alert('Apikey Tidak Valid. Silahkan beli apikey ke Instagram @zeeoneofc');
            amlert.classList.remove('hideop')
          }
        };
        xhr.open("GET", url, true);
        xhr.send();
      }
    } 