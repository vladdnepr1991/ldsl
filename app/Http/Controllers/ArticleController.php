<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function index() {
        return Article::all();
    }

    public function show($id) {
        return Article::find($id);
    }

    public function store(Request $reques) {
        return Article::create($reques->all);
    }

    public function update(Request $request, $id) {
        $article = Article::findOrFail($id);
        $article->update($request->all());
    
        return $article;
    }

    
    public function delete($id) {
        Article::find($id)->delete();
    
        return 204;
    }
}
