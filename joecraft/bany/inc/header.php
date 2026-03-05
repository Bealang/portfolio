<?php

class Header {
/**
 * @param $page Page
 */
function __construct($page) {
    $this->page = $page;
}


function print_header() {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="LiteBans">
    <link href="<?php echo $this->page->autoversion('inc/img/favicon.ico'); ?>" rel="shortcut icon">
    <!-- CSS -->
    <link href="<?php echo $this->page->autoversion('inc/css/bootstrap.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo $this->page->autoversion('inc/css/glyphicons.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo $this->page->autoversion('inc/css/custom.css'); ?>" rel="stylesheet">
    <script>
        var serverip = '<?= $this->page->settings->server_ip ?>';
        var port = '<?= $this->page->settings->server_port ?>'
        var default_theme = '<?= $this->page->settings->color_schema ?>';
        var particles_enabled = <?= $this->page->settings->particles ?>;
    </script>
    <?php $color = $this->page->hexToRgb($this->page->settings->color, 0.6); ?>
    <style>
        :root {
            --main-color: <?= $this->page->settings->color ?>;
            --main-color-transparent: rgb(<?= $color['r']; ?>,<?= $color['g']; ?>,<?= $color['b']; ?>,<?= $color['a']; ?>);
            --sleek-logo-size: <?= $this->page->settings->logo_size ?>;
        }
        .headerbg {
            background: url(<?= $this->page->settings->background ?>;);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    </style>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script type="text/javascript">
        function withjQuery(tries, f) {
            if (window.jQuery) f();
            else if (tries > 0) window.setTimeout(function () {
                withjQuery(tries - 1, f);
            }, 100);
        }
    </script>
</head>

<div id="preloader">
        <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    </div>
</div>
<?php if($this->page->settings->theme_changer): ?>   
<div class="seek_themechanger" onclick="changetheme();">
    <i class="fas fa-adjust"></i>
</div>
<?php endif; ?>
<div class="header">
<div class="topbar">
    <div class="container">
        <div class="topbar-items">
        <ul>
            <?php foreach ($this->page->settings->menu as $item): ?>
                <li><a href="<?= $item[2]; ?>"><i class="<?= $item[0]; ?>"></i> <span class="text"><?= $item[1]; ?></span></a></li> 
            <?php endforeach; ?>
        </ul>
        <div class="topbar-server" id="CopyIP">
            <div class="text">DOLACZ DO <b id="online">0</b> GRACZY</div>
            <div class="ip" id="ip">JoeCraft.PL</div>
        </div>
        </div>
    </div>
</div>
<div class="logo">
        <a href="/"><img src="<?= $this->page->settings->logo ?>" /></a>
</div>
    <div class="headerbg"></div>
    <div id="particles-header"></div>
</div>
<input type="text" id="ipvalue" value="loading..."/>
<div class="sleek-body">      

<?php
}
}
?>
