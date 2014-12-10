<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>



  <div id="subdv" class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      Account Subtype
	                                    </label>
	                                    <div class="col-sm-8 col-xs-12">
	                                   
	                                      <select name="mealaccount" class="form-control trreq">
 
 <c:forEach var="acclist" items="${accList}">
 <option value="${acclist.id}"> ${acclist.name}</option>
 </c:forEach>
 </select>
	                                    
	                                    </div>
	                                    
	                                    
	                                </div>
	                                
 
 
 
                                       