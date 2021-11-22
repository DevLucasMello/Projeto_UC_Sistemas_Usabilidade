import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nav } from 'src/app/Telas/Models/Nav';
import { LocalStorageUtils } from 'src/app/Validacao/localStorage';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  public localStorage: LocalStorageUtils = new LocalStorageUtils();

  isCollapsed = true;

  nav: Nav[] = [
    {
      link: '/admin/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/admin/vagas',
      name: 'Vagas',
      exact: false,
      admin: false
    },
    {
      link: '/admin/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.localStorage.limparDadosLocaisAdmin();
    this.router.navigate(['']);
  }

}
