/// <reference types= "cypress"/>

/*
 * Assignment 1: Hit the request url https://reqres.in/api/users?page=2 & assert the below cases:
    i. total_pages in response is always equal to 2
    ii. status code 200
    iii.check email contain "byron.fields@reqres.in" 
 */

describe('Seven peaks Assignment', () => {
  let response;

  before(() => {
    cy.request('https://reqres.in/api/users?page=2').then((res) => {
      response = res;
    });
  });

  // i. total_pages in response is always equal to 2
  it('i. total_pages in response is always equal to 2', () => {
    expect(response.body.total_pages).to.eq(2);
  });

  // ii. status code 200
  it('ii. status code 200', () => {
    expect(response.status).to.eq(200);
  });

  // iii.check email contain "byron.fields@reqres.in"
  it('iii. check email contain "byron.fields@reqres.in"', () => {
    const userWithEmail = response.body.data.find(
      (user) => user.email === 'byron.fields@reqres.in'
    )
    expect(userWithEmail).to.have.property('email', 'byron.fields@reqres.in');
  });
});
