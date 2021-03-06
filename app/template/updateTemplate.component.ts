import { PostSystemService } from './../service/postSystem.service';
import { Component, Injector, Input, OnInit } from '@angular/core';

declare let swal:any;

@Component({})
export class UpdateTemplateComponent {
    @Input() public item;
    postSystemService: PostSystemService;

    constructor(injector: Injector){
        this.postSystemService = injector.get(PostSystemService);
    }

    // update the item and emit to parent for refreshing table
    Update(url, urlParam): any{
        let that = this;
        return new Promise(function(resolve, reject){
            that.postSystemService
                .postData(url, urlParam)
                .subscribe(
                    data => swal('Updating Successed', data.success, 'success'),
                    error => {
                        let err = error.json();
                        console.log(err.error);
                        resolve(false);
                    },
                    () => {
                        resolve(true);
                    }
                );

        });
    }
}
