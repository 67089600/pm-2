package com.pm.controller;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import com.mongodb.DBObject;
import com.pm.pojo.AreaCode;

@Controller
//@RequestMapping(value = "/user")
public class UserController {

	/*@Autowired
	private UserService userService;
	
	@Autowired
	private AreaCodeService areaCodeService;*/
	
	@RequestMapping(value = "/area", method = RequestMethod.GET)
	public List<String> getAreaList(@ModelAttribute AreaCode list, ModelMap model ) {
//		model.addAttribute("userList", userService.listUser());  
//		return "index";
//		return userService.listUser();
		List<String> rlist = new ArrayList<String>();
		rlist.add("hello");
		return rlist;
	}
	
	/*@RequestMapping(value = "/save", method = RequestMethod.GET)  
    public View createPerson(@ModelAttribute User user, ModelMap model) {
        if(StringUtils.hasText(user.getId())) {
        	userService.updateUser(user);
        } else {
        	userService.addUser(user);
        }
        return new RedirectView("/fastgo/users");  
    }
         
    @RequestMapping(value = "/delete", method = RequestMethod.GET)  
    public View deletePerson(@ModelAttribute User user, ModelMap model) {  
    	userService.deleteUser(user);  
        return new RedirectView("/fastgo/login");  
    }
    *//**
     * 切换城市
     * @return
     *//*
    @ResponseBody
    @RequestMapping(value = "/switchCity", method = RequestMethod.GET)
    public JSONObject switchCity(AreaCode areaCode){
    	return userService.switchCity(areaCode);
    }*/
}
