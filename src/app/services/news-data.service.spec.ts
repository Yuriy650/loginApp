import {Articles, NewsDataService} from './news-data.service';
import {of} from 'rxjs';

describe('NewsDataService', ()=>{
  let httpClientSpy: {get: jasmine.Spy};
let newsService: NewsDataService;

beforeEach(()=>{
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  newsService = new NewsDataService(httpClientSpy as any)
});

it('should return expected articles(Http calls once)', (done: DoneFn)=>{
  const expectedArticles: Articles[] = [
    {
      source: {
        id: 1,
        name: 'apple'
      },
      author: 'author',
      title: 'title',
      description: 'desc',
      url: 'http://вап',
      urlToImage: 'http://',
      publishedAt: 'portal',
      content: 'good'
    },
    {
      source: {
        id: 2,
        name: 'tesla'
      },
      author: 'author',
      title: 'model-s',
      description: 'desc',
      url: 'http://sgsa',
      urlToImage: 'http://',
      publishedAt: 'portal',
      content: 'best'
    }
  ];

  httpClientSpy.get.and.returnValue(of(expectedArticles));

  newsService.fetchNews().subscribe(
    articles=>{
      expect(articles).toBeTruthy(expectedArticles);
      done();
    },
    done.fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call')
})

})
