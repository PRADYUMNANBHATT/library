class Booklist {
  static bookView = async (req, res) => {
    try {
      const products = await book;
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "No Product found",
        status: "failed",
      });
    }
  };
}
export default Booklist;
