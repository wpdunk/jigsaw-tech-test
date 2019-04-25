const chai = require("chai");
const rp = require("request-promise");
const categoriesHandler = require("../src/handlers/categoriesHandler.js");

chai.should();

async function request(path) {
  return rp({
    url: `http://localhost:3000/insights/${path}`,
    method: "GET",
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body.
    simple: false // ensures promise resolves even if statusCode is not 200 series.
  });
}

describe("Insights Service", () => {
  describe("/categories", () => {
    context("it is yet to be implemented", () => {
      it("should return a 501 error", async () => {
        const response = await request("/categories");
        response.statusCode.should.equal(501);
      });
    });
  });
  describe("/cashflow", () => {
    context("it is yet to be implemented", () => {
      it("should return a 501 error", async () => {
        const response = await request("/cashflow");
        response.statusCode.should.equal(501);
      });
    });
  });
  describe("/merchants", () => {
    context("it is yet to be implemented", () => {
      it("should return a 501 error", async () => {
        const response = await request("/merchants");
        response.statusCode.should.equal(501);
      });
    });
  });
});

describe("categoriesHandler", () => {
  it("formats response", () => {
    let sampleData = [
      {
        id: 1,
        amount: 1798,
        merchant: "Sainsburys",
        category: "Groceries",
        paymentDate: "2019-02-14T10:40:33.516Z"
      }
    ];
    JSON.stringify(categoriesHandler.format(sampleData)).should.equal(
      JSON.stringify({
        Groceries: {
          totalNumber: 1,
          totalValue: 1798,
          averageValue: 1798
        }
      })
    );
  });
});
