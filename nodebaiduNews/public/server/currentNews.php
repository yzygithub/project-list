<?php
    require_once('DB.php');
    if($link) {
        $newsid=$_GET['newsid'];
        $sql = "SELECT * FROM `news` WHERE `newsId`={$newsid};";
        mysqli_query($link,'SET NAMES utf8');
        $result=mysqli_query($link,$sql);
        $senddata=array();
        while($row = mysqli_fetch_assoc($result)) {
            array_push($senddata,array(
            'newsid'=>$row['newsId'],
            'newstype'=>$row['newsType'],
            'newstitle'=>$row['newsTitle'],
            'newsimg'=>$row['newsImg'],
            'newstime'=>$row['newsTime'],
            'newssrc'=>$row['newsSrc']
            ));
        }
         echo json_encode($senddata);

    }else {
             echo json_encode(array('连接数据库信息'=>'连接失败'));
          }

    mysqli_close($link);

?>