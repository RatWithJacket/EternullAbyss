// This document just inserts the header onto every page so you don't have to do it manually. I.e. its like a PHP include

var funnyDocument = document.getElementById('header')

funnyDocument.innerHTML = `

<div class="p-3 text-center">
    <h1 class="display-3">𓆩 EternullAbyss 𓆪</h1>
</div>

<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-xxl justify-content-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item px-4">
                    <a class="nav-link fw-bold" href="index.html">Home</a>
                </li>
                <li class="nav-item px-4">
                    <a class="nav-link fw-bold" href="about-me.html">About Me</a>
                </li>
                <li class="nav-item px-4">
                    <a class="nav-link fw-bold" href="commissions.html">Commissions</a>
                </li>
                <li class="nav-item px-4">
                    <a class="nav-link fw-bold" href="links.html">Links</a>
                </li>
                <li class="nav-item px-4">
                    <a class="nav-link fw-bold" href="credits.html">Credits</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

`