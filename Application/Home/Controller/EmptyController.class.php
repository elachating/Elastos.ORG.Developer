<?php
namespace Home\Controller;
use Think\Controller;
class EmptyController extends Controller
{
    public function _empty(){
        //echo "您访问的控制器不存在";
    }
	  public function index(){
        //echo "您访问的控制器不存在";
		$this->assign("curhost","https://".$_SERVER['HTTP_HOST']."/");
		$this->display();
    }
}
?>