package com.tss.ocean.idao;

import java.util.List;

import com.techshark.hibernate.ibase.GenericDAO;
import com.tss.ocean.pojo.FoodItem;

public interface IFoodItemDAO extends GenericDAO<FoodItem, Integer> {

	List<FoodItem> getFoodItemsByMeal(String meal);
}
