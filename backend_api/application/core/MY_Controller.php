<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends MX_Controller {

	public function __construct(){
      parent::__construct();
      // $this->load->model('MY_Model');
			// echo "asdasdsa";
			// $result=$this->MY_Model()
	    // ->select()
	    // ->from('users')
	    // ->result_array();
	    // echo "<pre>";
	    // print_r($result);
	    // echo "</pre>";
	    // exit();
			// echo "HI FROM MY CONTROLLER <br>";
			// echo "<pre>";
			// print_r($this->MY_Model);
			// echo "</pre>";
			// exit();
  }

	public function load_page($page,$data = array()){
		$this->load->view('includes/head',$data);
		$this->load->view('includes/nav',$data);
		$this->load->view($page,$data);
		$this->load->view('includes/footer',$data);
	}
}
