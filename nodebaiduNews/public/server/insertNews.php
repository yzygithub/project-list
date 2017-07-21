<?php
    require_once('DB.php');
    if ($link) {
        $newstype = $_POST['newstype'];
        $newstitle = $_POST['newstitle'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc = $_POST['newssrc'];

        $sql = "INSERT INTO `news`(`newsType`, `newsTitle`, `newsImg`, `newsTime`, `newsSrc`) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";

        mysqli_query($link,'SET NAMES utf8');
        $result=mysqli_query($link,$sql);

        echo json_encode(array('send'=>'ok'));
}else {
        echo json_encode(array('连接数据库信息'=>'连接失败'));
      }
     mysqli_close($link);

?>