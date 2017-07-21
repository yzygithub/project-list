<?php
    require_once('DB.php');
    if($link) {
        $newsid=$_POST['newsid'];
        $sql = "DELETE FROM `news` WHERE `newsId`={$newsid};";
        mysqli_query($link,'SET NAMES utf8');
        $result=mysqli_query($link,$sql);
        echo json_encode(array('delete'=>'ok'));

    }else {
             echo json_encode(array('连接数据库信息'=>'连接失败'));
          }

    mysqli_close($link);

?>