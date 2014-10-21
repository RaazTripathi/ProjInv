package com.tss.ocean.controller;

import java.util.Date;
import java.util.logging.Level;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.ResourceMapping;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.pojo.Users;
import com.tss.ocean.service.IUserservice;

@Controller
public class RegistrationController {

	@Autowired
	IUserservice userService;

	@RequestMapping(value = { "/register/register.htm" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String registration(@ModelAttribute("user") Users user,
			HttpServletRequest request) throws Exception {

		return "register";
	}

	@RequestMapping(value = { "/register/registerAction.htm" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public String register(@ModelAttribute("user") Users user,
			HttpServletRequest request) throws Exception {

		System.out.println(user.getName()
				+ "...............................................");
		user.setCreatedat(new Date());
		userService.insert(user);
		return "redirect:/";
	}

	
	@RequestMapping(value = { "/setting.htm" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ModelAndView setting(@ModelAttribute("user") Users user,
			HttpServletRequest request) throws Exception {

	
ModelAndView mv = new ModelAndView("setting");
mv.getModelMap().put("ulist", userService.getList());



		return mv;
	}
	
	
	
	
	
	
	@RequestMapping(value = { "/updateuser.htm" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView settingUpdate(@ModelAttribute("user") Users user,
			HttpServletRequest request) throws Exception {
System.out.println(">>>>>>>>>>>>>>>>>>>>>"+user.getId());
		/*userService.update(user);*/
Users u=userService.getRecordByKeyandValue("id", user.getId());
u.setRole(user.getRole());
userService.update(u);
ModelAndView mv = new ModelAndView("setting");
mv.getModelMap().put("ulist", userService.getList());



		return mv;
	}
	
	
}
