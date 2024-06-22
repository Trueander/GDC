export class ContenidoTree {
  constructor(public id: number,
              public key: string,
              public label: string,
              public children: ContenidoTree[]) {
  }
}
