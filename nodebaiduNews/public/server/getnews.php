<?php

    require_once('DB.php');
    if($link) {
        //执行成功的过程
         if ($_GET['newstype']) {
             $newstype = $_GET['newstype'];
             $sql="select * from news where `newsType`='{$newstype}'";
             mysqli_query($link,'SET NAMES utf8');
             $result=mysqli_query($link,$sql);
             if (mysqli_num_rows($result) > 0) {
                 // 输出数据
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
             } else {
                 echo "0 结果";
             }
         }else {
            $sql='select * from news order by newsId desc';
            mysqli_query($link,'SET NAMES utf8');
            $result=mysqli_query($link,$sql);
            if (mysqli_num_rows($result) > 0) {
                // 输出数据
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
            } else {
                echo "0 结果";
            }
        }
    }
    else {
     echo json_encode(array('连接数据库信息'=>'连接失败'));
    }
     mysqli_close($link);
?>