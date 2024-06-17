import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects = [
    {
      id: 'megatoads',
      name: 'MegaToads',
      symbol: 'MT',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/1226/thumb/megatoads.png',
      fav: true,
    },
    {
      id: 'delegatooors',
      name: 'OP Delegatooors',
      symbol: 'DELEGATOOOR',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/1658/thumb/https-fanbase-1-s3-amazonaws-com-quixotic-collection-profile-img_2232_1_fegqjie-png.png',
      fav: false,
    },
    {
      id: 'gata-horizons',
      name: 'GATA Horizons',
      symbol: 'GATA HORIZONS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4019/thumb/gata-horizons.jpg',
      fav: true,
    },
    {
      id: 'gates-of-hell',
      name: 'Gates of Hell',
      symbol: 'GOHELL',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/1517/thumb/gates-of-hell.png',
      fav: false,
    },
  ];

  findAll() {
    return this.projects;
  }

  create(project: any) {
    this.projects.push(project);
  }

  delete(id: string) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }
}
