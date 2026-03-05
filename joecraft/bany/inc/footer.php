<?php 
require_once './inc/settings.php';

$settings = new Settings(false);
?>
</div>
<footer class="footer">
    <div class="seekutils">
        <div class="container">
            <div class="seekrow">
                <div class="block">
                    <img src="<?= $settings->logo; ?>">
                </div>
                <div class="block">
                    <div class="title"><?= $settings->block[2]['title'] ?></div>
                    <div class="text"><?= $settings->block[2]['content'] ?></div>
                </div>      
                <div class="block">
                    <div class="title"><?= $settings->block[3]['title'] ?></div>
                    <ul>
                    <?php foreach ($settings->block[3]['content'] as $item): ?>
                        <li><a href="<?= $item[1]; ?>"><?= $item[0]; ?></a></li>
                    <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>   
<script src="<?php echo $this->autoversion('inc/js/jquery-3.3.1.min.js'); ?>"></script>
<script src="<?php echo $this->autoversion('inc/js/bootstrap.min.js'); ?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script>
    document.getElementById('ipvalue').value = serverip;
    document.getElementById('ip').textContent = serverip;
    
    $.getJSON(`https://api.mcsrvstat.us/2/83.168.105.232:50056`, function (data) {
		if (data.online == true) document.getElementById('online').textContent = data.players.online;
    });
    		
    var copyip = document.getElementById('CopyIP');
    copyip.addEventListener('click', Copy);
    		
    function Copy(){
        Swal.fire('Skopiowano IP!','Mamy nadzieje ze zobaczymy cie na serwerze!','success');
    	document.getElementById("ipvalue").select(),document.execCommand("copy");
    }
    </script>
    <script>
        function changetheme(){
            var theme = $.cookie('theme');

            if(theme != undefined)
                $.removeCookie('theme', { path: '/' });
                
            if(theme == "light"){
                $( "body" ).addClass("dark"); 
                $.cookie("theme", "dark", { path: '/' });
            }else {
                $('body').toggleClass('dark');
                $.cookie("theme", "light", { path: '/' });
            }   
        }

    </script>
    <script>
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
      var theme = $.cookie('theme');
      if(theme != undefined){
        if(theme != "light"){
            $( "body" ).addClass("dark");
        }
      }else {
          if(default_theme != "light"){
            $( "body" ).addClass("dark");
          }
      }
      $("#preloader").addClass("loaded");
    });
    </script>
    <script>
    $(function() {
        if(particles_enabled){
            particlesJS("particles-header", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.31,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":4,"direction":"top","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"173850"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
        }
    });
    </script> 
<?php echo "</html>"; ?>
