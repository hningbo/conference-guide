import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conference-guide';
  conferenceMeta: any;

  constructor() {
    this.conferenceMeta = [{
      conferenceName: 'SIGKDD(ACM Knowledge Discover from Datas Conference)',
      conferenceSymbolAddress: './assets/pic/sigkdd2018.jpg',
      conferenceUrl: 'https://www.kdd.org/kdd%year%/accepted-papers'
    }, {
      conferenceName: 'SIGIR(ACM Information Retrieval Conference)',
      conferenceSymbolAddress: './assets/pic/sigir.png',
      conferenceUrl: 'http://sigir.org/sigir%year%/program/accepted/'
    }, {
      conferenceName: 'ICML(International Conference on Machine Learning)',
      conferenceSymbolAddress: './assets/pic/icml.png',
      conferenceUrl: 'https://icml.cc/Conferences/%year%/Schedule?type=Poster'
    }, {
      conferenceName: 'AAAI Conference on Artificial Intelligence',
      conferenceSymbolAddress: './assets/pic/sigir.jpg',
      conferenceUrl: 'https://aaai.org/Conferences/AAAI-19/'
    }, {
      conferenceName: 'ACM Digital Library',
      conferenceSymbolAddress: './assets/pic/acmdl.jpg',
      conferenceUrl: 'https://dl.acm.org/'
    }, {
      conferenceName: 'NAACL(North American Chapter of Association for Computational Linguistics)',
      conferenceSymbolAddress: './assets/pic/acl.png',
      conferenceUrl: 'https://www.aclweb.org/anthology/events/naacl-%year%/'
    }, {
      conferenceName: 'ACL(Association for Computational Linguistics)',
      conferenceSymbolAddress: './assets/pic/acl.png',
      conferenceUrl: 'https://www.aclweb.org/anthology/events/acl-%year%/'
    }, {
      conferenceName: 'EMNLP(Conference on Empirical Methods in Natural Language Processing)',
      conferenceSymbolAddress: './assets/pic/emnlp.png',
      conferenceUrl: 'https://www.aclweb.org/anthology/events/emnlp-%year%/'
    }, {
      conferenceName: 'NIPS(Neural Information Processing Systems)',
      conferenceSymbolAddress: './assets/pic/nips.svg',
      conferenceUrl: 'https://papers.nips.cc/book/advances-in-neural-information-processing-systems-31-%year%'
    }, {
      conferenceName: 'ICLR(International Conference on Learning Representations)',
      conferenceSymbolAddress: './assets/pic/iclr.png',
      conferenceUrl: 'https://iclr.cc/Conferences/%year%/Schedule?type=Poster'
    }, {
      conferenceName: 'IJCAI(International Joint Conferences on Artificial Intelligence Organization)',
      conferenceSymbolAddress: './assets/pic/ijcai.png',
      conferenceUrl: 'http://ijcai-18.org/accepted-papers/index.html'
    }, {
      conferenceName: 'IEEE TKDE(Knowledge and Data Engineer)',
      conferenceSymbolAddress: './assets/pic/ieee.jpg',
      conferenceUrl: 'https://dblp.uni-trier.de/db/journals/tkde/'
    }, {
      conferenceName: 'JMLR(Journal of Machine Learning Research)',
      conferenceSymbolAddress: './assets/pic/jmlr.jpg',
      conferenceUrl: 'http://www.jmlr.org/papers/'
    }
    ];
  }
}
