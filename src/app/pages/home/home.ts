import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { About } from '../../components/about/about';
import { Portfolio } from '../../components/portfolio/portfolio';
import { WhyUs } from '../../components/why-us/why-us';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Process } from '../../components/process/process';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Hero,
    Services,
    Portfolio,
    WhyUs,
    Testimonials,
    About,
    Process,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
