import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseService } from 'src/app/services/base.service';
import { HttpApiResponse } from "src/app/Models/http-api-response";
import { VagasAdmin } from "../models/vagasModel";
import { DashboardVagas } from "../models/dashboard-vagas";
import { catchError } from "rxjs/operators";

@Injectable()
export class VagasAdminService extends BaseService {

    constructor(private http: HttpClient) { super() }

    //Microsservicos
    // obterVagasUsuariosPorAdminId(adminId: string): Observable<HttpApiResponse<DashboardVagas[]>> {
    //     let admin_id = adminId;        
    //     return this.http.post<HttpApiResponse<DashboardVagas[]>>(`${this.UrlServiceVagasAdmin}obterCandidatosInscritosPorIdAdmin`,{admin_id}, super.ObterAuthHeaderJsonAdmin());
    // }

    // obterPorId(id: string): Observable<HttpApiResponse<VagasAdmin>> {
    //     return this.http
    //         .get<HttpApiResponse<VagasAdmin>>(this.UrlServiceVagasAdmin + "obterVagaPorId/" + id, super.ObterAuthHeaderJsonAdmin())
    //         .pipe(catchError(super.serviceError));
    // }

    // obterPorIdAdmin(adminId: string): Observable<HttpApiResponse<VagasAdmin[]>> {
    //     let admin_id = adminId;
    //     return this.http
    //         .get<HttpApiResponse<VagasAdmin[]>>(this.UrlServiceVagasAdmin + "obterVagasPorIdAdmin/" + admin_id, super.ObterAuthHeaderJsonAdmin())
    //         .pipe(catchError(super.serviceError));
    // }

    // atualizarVaga(vaga: VagasAdmin): Observable<HttpApiResponse<any>> {
    //     let id = vaga.id;
    //     let admin_id = vaga.adminId;
    //     let funcao = vaga.funcao;
    //     let descricao = vaga.descricao;
    //     let area = vaga.area;
    //     let horario = vaga.horario;
    //     let salario = vaga.salario;
    //     let beneficios = vaga.beneficios;
    //     let quantidade = vaga.quantidade;
    //     return this.http.put<HttpApiResponse<any>>(`${this.UrlServiceVagasAdmin}atualizarVaga/${id}`,{admin_id,funcao,descricao,area,horario,salario,beneficios,quantidade}, super.ObterAuthHeaderJsonAdmin());
    // }

    // excluirVaga(id: string): Observable<HttpApiResponse<any>> {        
    //     return this.http.delete<HttpApiResponse<any>>(`${this.UrlServiceVagasAdmin}excluirVaga/${id}`, super.ObterAuthHeaderJsonAdmin());
    // }

    // cadastrarVaga(vaga: VagasAdmin): Observable<HttpApiResponse<any>> {        
    //     let admin_id = vaga.adminId;
    //     let funcao = vaga.funcao;
    //     let descricao = vaga.descricao;
    //     let area = vaga.area;
    //     let horario = vaga.horario;
    //     let salario = vaga.salario;
    //     let beneficios = vaga.beneficios;
    //     let quantidade = vaga.quantidade;
    //     return this.http.post<HttpApiResponse<any>>(`${this.UrlServiceVagasAdmin}cadastrarVaga`,{admin_id,funcao,descricao,area,horario,salario,beneficios,quantidade}, super.ObterAuthHeaderJsonAdmin());
    // }


    //Monolito
    obterVagasUsuariosPorAdminId(adminId: string): Observable<HttpApiResponse<DashboardVagas[]>> {
        let admin_id = adminId;        
        return this.http.post<HttpApiResponse<DashboardVagas[]>>(`${this.UrlServiceMonolito}vagasAdmin/obterCandidatosInscritosPorIdAdmin`,{admin_id}, super.ObterAuthHeaderJsonAdmin());
    }

    obterPorId(id: string): Observable<HttpApiResponse<VagasAdmin>> {
        return this.http
            .get<HttpApiResponse<VagasAdmin>>(this.UrlServiceMonolito + "vagasAdmin/obterVagaPorId/" + id, super.ObterAuthHeaderJsonAdmin())
            .pipe(catchError(super.serviceError));
    }

    obterPorIdAdmin(adminId: string): Observable<HttpApiResponse<VagasAdmin[]>> {
        let admin_id = adminId;
        return this.http
            .get<HttpApiResponse<VagasAdmin[]>>(this.UrlServiceMonolito + "vagasAdmin/obterVagasPorIdAdmin/" + admin_id, super.ObterAuthHeaderJsonAdmin())
            .pipe(catchError(super.serviceError));
    }

    atualizarVaga(vaga: VagasAdmin): Observable<HttpApiResponse<any>> {
        let id = vaga.id;
        let admin_id = vaga.adminId;
        let funcao = vaga.funcao;
        let descricao = vaga.descricao;
        let area = vaga.area;
        let horario = vaga.horario;
        let salario = vaga.salario;
        let beneficios = vaga.beneficios;
        let quantidade = vaga.quantidade;
        return this.http.put<HttpApiResponse<any>>(`${this.UrlServiceMonolito}vagasAdmin/atualizarVaga/${id}`,{admin_id,funcao,descricao,area,horario,salario,beneficios,quantidade}, super.ObterAuthHeaderJsonAdmin());
    }

    excluirVaga(id: string): Observable<HttpApiResponse<any>> {        
        return this.http.delete<HttpApiResponse<any>>(`${this.UrlServiceMonolito}vagasAdmin/excluirVaga/${id}`, super.ObterAuthHeaderJsonAdmin());
    }

    cadastrarVaga(vaga: VagasAdmin): Observable<HttpApiResponse<any>> {        
        let admin_id = vaga.adminId;
        let funcao = vaga.funcao;
        let descricao = vaga.descricao;
        let area = vaga.area;
        let horario = vaga.horario;
        let salario = vaga.salario;
        let beneficios = vaga.beneficios;
        let quantidade = vaga.quantidade;
        return this.http.post<HttpApiResponse<any>>(`${this.UrlServiceMonolito}vagasAdmin/cadastrarVaga`,{admin_id,funcao,descricao,area,horario,salario,beneficios,quantidade}, super.ObterAuthHeaderJsonAdmin());
    }
}
