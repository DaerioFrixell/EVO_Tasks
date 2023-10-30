this._routeSubscription = this.route.data
.pipe(
    withLatestFrom(
        forkJoin(this.route.pathFromRoot.slice(1).slice(0, -1).map(p => p.data.pipe(take(1)))),
    ),
    tap(data => console.log("first tap: ", data) ),
    map(data => [
        {...data[0],  
        resolves: {
            ...data[0].resolves ,
            data: data[0].resolves.data.filter(reg => {                            
                if (this.selectionService.isProcessSelect) {
                    (reg.number.indexOf("РН-ПО") === 0) 
                    && (reg.object.type.id === 'software') 
                    && (reg.subject.data.organization.name === this.currentOrganization.name) 
                } else {
                    reg
                }                     
            }
            )}
        }, 
        d[1]
    ])              
)