<%-- <%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %> --%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; UTF-8" pageEncoding="UTF-8" %>
<%-- <sec:authentication var="user" property="principal" /> --%>
<div>
  <div>
    <div class="mainmenu-area" ng-controller="menu as menuCtrl">
      <div class="container-fluid">
        <div class="row">
          <div class="navbar-header navbar-style">
            <div class="pull-left">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="visible-xs pull-right session-management-xs">
              <ul class="list-unstyled list-inline">
                <session-management></session-management>
              </ul>
            </div>
          </div>
          <div class="pull-left navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <bootstrap-submenu ng-repeat="item in menuCtrl.menuItems" menu-item="item"/>
            </ul>
          </div>
          <div class="pull-right usuario hidden-xs">
            <ul class="list-unstyled list-inline">
              <session-management></session-management>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>