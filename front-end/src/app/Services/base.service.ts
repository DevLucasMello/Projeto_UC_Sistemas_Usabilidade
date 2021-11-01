import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from 'src/environments/environment';

export abstract class BaseService {

    //Microservicos
    // protected UrlServiceVagasUsuario: string = environment.apiVagasUsuario;
    // protected UrlServiceCadastroUsuario: string = environment.apiCadastroUsuario;
    // protected UrlServiceCadastroAdmin: string = environment.apiCadastroAdmin;
    // protected UrlServiceVagasAdmin: string = environment.apiVagasAdmin;

    //Monolito
    protected UrlServiceVagasUsuarioMonolito: string = environment.apiVagasUsuarioMonolito;
    protected UrlServiceCadastroUsuarioMonolito: string = environment.apiCadastroUsuarioMonolito;
    protected UrlServiceCadastroAdminMonolito: string = environment.apiCadastroAdminMonolito;
    protected UrlServiceVagasAdminMonolito: string = environment.apiVagasAdminMonolito;
    //public LocalStorage = new LocalStorageUtils();

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    // protected ObterAuthHeaderJson() {
    //     return {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`
    //         })
    //     };
    // }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }

        console.error(response);
        return throwError(response);
    }
}
