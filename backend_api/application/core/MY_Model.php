<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Model extends CI_Model {

     public function __construct(){
          parent::__construct();
     }

     public function getRows($table ,$select, $where = array() , $join = array() ,$group = "", $res = 'array' ){

          if(!empty($select)){
               $this->db->select($select);
          }else{
               $this->db->select("*");
          }

          if(!empty($where)){
               $this->db->where($where);
          }

          if(!empty($join)){
               foreach($join as $key => $value){
                    $val = explode(":",$value);
                    $this->db->join($key,$val[0],$val[1]);
               }
          }

          if(!empty($group)){
               $this->db->group_by($group);
          }

          $query = $this->db->get($table);

          switch ($res) {
               case 'array':
               return $query->result_array();
                    break;
               case 'obj':
               return $query->result();
                    break;
               case 'row':
               return $query->row();
                    break;
               default:
               return $query->result_array();
                    break;
          }
     }

     public function get_datatables($table, $column_order, $select = "*", $where = "", $join = array(), $limit, $offset, $search, $order,$group = '')
	{
	  	$this->db->from($table);
	  	$columns = $this->db->list_fields($table);
	  	if($select){
	  		$this->db->select($select);
	  	}
	  	if($where){
	  		$this->db->where($where);
	  	}
	  	if($join){
	  		foreach ($join as $key => $value) {
				$this->db->join($key,$value,'left');
	  		}
	  	}
	  	if($search){
	  		$this->db->group_start();
	  		foreach ($column_order as $item)
	  		{
	  			$this->db->or_like($item, $search['value']);
	  		}
	  		$this->db->group_end();
	  	}
	  	if($group)
	  		$this->db->group_by($group);

	  	if($order)
	  		$this->db->order_by($column_order[$order['0']['column']], $order['0']['dir']);

	    	$temp = clone $this->db;
	    	$data['count'] = $temp->count_all_results();

	  	if($limit != -1)
	  		$this->db->limit($limit, $offset);

	  	$query = $this->db->get();
	  	$data['data'] = $query->result();

	  	$this->db->from($table);
	  	$data['count_all'] = $this->db->count_all_results();
	  	return $data;
	}

     public function insert($table,$set){
          $this->db->insert($table,$set);
          return $this->db->insert_id;
     }

     public function batch_insert($table,$set){
          $this->db->batch_insert($table,$set);
          return true;
     }

     public function update($table,$set,$where = array()){
          $this->db->where($where);
          $this->db->update($table,$set);
          return true;
     }

     public function delete($table,$where = array()){
          $this->db->where($where);
          $this->db->delete($table);
          return true;
     }
}
